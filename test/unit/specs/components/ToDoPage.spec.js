import { shallow, createLocalVue } from 'vue-test-utils'
import Router from 'vue-router'
import RouterOpt from '@/router/options'
import ToDoPage from '@/components/ToDoPage'

const localVue = createLocalVue()
localVue.use(Router)

const router = new Router(RouterOpt)

describe('ToDoPage', () => {
  const wrapper = shallow(ToDoPage, {
    localVue,
    router
  })

  it('`beforeRouteEnter` deve ser chamada somente uma vez', () => {
    const { beforeRouteEnter } = wrapper.vm.$options
    router.push('/', () => expect(beforeRouteEnter).toHaveBeenCalledTimes(1))
  })
})
