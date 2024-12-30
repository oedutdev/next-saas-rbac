import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({
  role: 'MEMBER',
})

const userCanInviteSomeoneElse = ability.can('invite', 'User')

console.log(userCanInviteSomeoneElse)
