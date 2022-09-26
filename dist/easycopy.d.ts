import { Event } from 'clipboard';

declare type CopyTextOpt = {
    container?: HTMLElement;
};
declare const copyText: (text: string, opt?: CopyTextOpt) => Promise<Event>;

export { CopyTextOpt, copyText };
