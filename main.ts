import ClipboardJS from 'clipboard'
import type { Event } from 'clipboard'

export type CopyTextOpt = {
    container?: HTMLElement
}

export const copyText = (text: string, opt?: CopyTextOpt): Promise<Event> => {
    return new Promise((resolve, reject) => {
        try {
            let triggerEl: null | HTMLElement = document.createElement('button')
            triggerEl.id = 'easyCopyId'
            triggerEl.style['opacity'] = '0'

            let clipboard: null | ClipboardJS = new ClipboardJS('#easyCopyId', {
                text: function () {
                    return text
                },
                action: function () {
                    return 'copy'
                },
                container:
                    typeof opt?.container === 'object'
                        ? opt.container
                        : document.body,
            })

            clipboard.on('success', function (e: Event) {
                e.clearSelection()
                resolve(e)
            })

            clipboard.on('error', function (e: Event) {
                reject(e)
            })

            document.body.appendChild(triggerEl)
            triggerEl.click()

            document.body.removeChild(triggerEl)
            clipboard.destroy()
            triggerEl = null
            clipboard = null
        } catch (e) {
            reject({
                action: 'copy',
                text,
                trigger: opt?.container || document.body,
            })
            console.error(`easycopy copyText error, msg: ${e}.`)
        }
    })
}
