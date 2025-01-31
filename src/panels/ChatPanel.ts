import { window, Disposable, Uri, ViewColumn, Webview, WebviewPanel } from "vscode";
import ollama from 'ollama';
import { getNonce, getUri } from "../helpers/utils";
import { AI_MODEL } from "../config";


export class ChatPanel {
  public static DEBUG: boolean = true
  public static currentPanel: ChatPanel | undefined;
  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];

  private constructor(panel: WebviewPanel, extensionUri: Uri) {
    ChatPanel.#log('[ChatPanel][constructor]')
    this._panel = panel;
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    this._panel.webview.html = this.#getWebviewContentVue(this._panel.webview, extensionUri);

    this.#setWebviewMessageListener(this._panel.webview);
  }

  public static render(extensionUri: Uri) {
    if (ChatPanel.currentPanel) {
      ChatPanel.currentPanel._panel.reveal(ViewColumn.One);
      return
    }
    const panel = window.createWebviewPanel(
      'deepChat',
      'DeepSeek Chat',
      ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [
          Uri.joinPath(extensionUri, 'out'),
          Uri.joinPath(extensionUri, 'webview-ui/build'),
        ]
      }
    )
    ChatPanel.currentPanel = new ChatPanel(panel, extensionUri)
  }

  static #log(...args: any[]) {
    if (ChatPanel.DEBUG) console.log(...args)
  }

  public dispose() {
    ChatPanel.currentPanel = undefined
    while (this._disposables.length) {
      const disposable = this._disposables.pop()
      if (disposable) disposable.dispose();
    }
  }

  #getWebviewContentVue(webview: Webview, extensionUri: Uri): string {
    // The CSS file from the React build output
    const stylesUri = getUri(webview, extensionUri, [
      "webview-ui",
      "build",
      "assets",
      "index.css",
    ]);
    // The JS file from the React build output
    const scriptUri = getUri(webview, extensionUri, [
      "webview-ui",
      "build",
      "assets",
      "index.js",
    ]);

    const nonce = getNonce();

    return /*html*/`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}'; connect-src 'self' https://api.iconify.design;"">
            <link rel="stylesheet" type="text/css" href="${stylesUri}">
            <title>DeepSeek</title>
        </head>
        <body>
            <div id="app"></div>
            <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
        </html>`
  }

  #setWebviewMessageListener(webview: Webview) {
    const onMessage = (message: any) => {
      ChatPanel.#log('[ChatPanel][setWebviewMessageListener][route] command:', message.command)
      const { command, text } = message

      if (command === 'ready') this.#onAppMounted()
      if (command === 'chat') this.#onChatMessage(text)
    }

    webview.onDidReceiveMessage(onMessage, undefined, this._disposables)
  }

  #onAppMounted() {
    ChatPanel.#log("[ChatPanel][onAppMounted] Vue App is ready")
  }

  async #onChatMessage(userPrompt: string) {
    ChatPanel.#log('[ChatPanel][onChatMessage] userPrompt:', userPrompt)
    let responseText = ''

    try {
      const streamResponse = await ollama.chat({
        model: AI_MODEL,
        messages: [{ role: 'user', content: userPrompt }],
        stream: true,
      })

      for await (const part of streamResponse) {
        responseText += part.message.content
        this._panel.webview.postMessage({
          command: 'chatResponse',
          text: responseText,
        })
      }
    } catch (err) {
      this._panel.webview.postMessage({
        command: 'chatResponse',
        text: 'Sorry, error...',
      })
      console.warn(err)
    }
  }
}
