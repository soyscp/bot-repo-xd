// Template de comandos

import { Message } from 'discord.js';
//@ts-ignore
import extClient from '../../client';
//@ts-ignore
import { Command } from '../../types';

export const command: Command = {
	name: '',
	description: '',
    aliases: [''],
    
    nsfw: false,
	disabled: false,
	dev: false,
    
	usage: '',
	example: ['*preserve command*'],
    args: 1,

    perms: '',
    indev: '',
	run: async (client: extClient, msg: Message, args: string[]) => {
        return
    }
}