import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')

console.log(userCanInviteSomeoneElse)
