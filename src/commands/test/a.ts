import { Message } from 'discord.js';
import extClient from '../../client';
import { Command } from '../../types';

export const command: Command = {
	name: 'paco',
	description: 'temaso',
	usage: '',
	example: [''],

	aliases: ['pako'],
	disabled: true,

	dev: true,

	run: async (client: extClient, msg: Message, args: string[]) => {
        return msg.reply('pacopacopacopacoxd')
    }
}