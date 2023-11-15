import CreateProduct from '../../components/CreateProducts.vue';
import { mount } from '@vue/test-utils';
import { describe } from 'vitest';
import { it } from 'vitest';


describe('CreateProduct component', () => {
  it('should render the product name input field', () => {
    const wrapper = mount(CreateProduct);
    const productNameInput = wrapper.find('#productName');
    expect(productNameInput.exists()).toBe(true);
  });

  it('should render the product category input field', () => {
    const wrapper = mount(CreateProduct);
    const productCategoryInput = wrapper.find('#productCategory');
    expect(productCategoryInput.exists()).toBe(true);
  });

  it('should render the product price input field', () => {
    const wrapper = mount(CreateProduct);
    const productPriceInput = wrapper.find('#productPrice');
    expect(productPriceInput.exists()).toBe(true);
  });

  it('should render the save changes button', () => {
    const wrapper = mount(CreateProduct);
    const saveChangesButton = wrapper.find('button[type="submit"]');
    expect(saveChangesButton.exists()).toBe(true);
  });

  it('should call the createProduct method when the save changes button is clicked', () => {
    const wrapper = mount(CreateProduct);
    const saveChangesButton = wrapper.find('button[type="submit"]');
    saveChangesButton.trigger('click');

    const createProductSpy = jest.spyOn(wrapper.vm, 'createProduct');
    expect(createProductSpy).toHaveBeenCalled();
  });
});
