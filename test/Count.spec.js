import { mount } from 'vue-test-utils';
import Count from '../src/Count.vue';

describe('Count component', () => {
    test('default number is 0', () => {
        const wrapper = mount(Count, {
            propsData: {
                start: 0
            }
        });

        expect(wrapper.vm.current).toBe(0);
    });
});