import { gs, GlideRecord } from '@servicenow/glide'

export function showStateUpdate(current:GlideRecord, previous:GlideRecord) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.info("HELO!");

    gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
}