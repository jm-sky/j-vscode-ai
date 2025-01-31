import * as vscode from 'vscode';
import { ChatPanel } from './panels/ChatPanel';


const commands = {
	startChat: 'j-vscode-deepseek-ai.startChat',
}

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "j-vscode-deepseek-ai" is now active!');

	const disposable = vscode.commands.registerCommand(commands.startChat, () => {
		console.log('Starting chat with DeepSeek...');
		ChatPanel.render(context.extensionUri)
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
