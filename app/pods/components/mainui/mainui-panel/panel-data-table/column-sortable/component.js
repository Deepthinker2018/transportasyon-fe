import Ember from 'ember';

const { Component, computed, get, set } = Ember;

const ATTR_IS_DESCENDING = '_isDescending';

const OPTION_CAN_SORT = 'canSort';
const OPTION_NAME = 'name';
const OPTION_SORT = 'sort';
const OPTION_ON_CLICK = 'onClick';

export default Component.extend({
  classNameBindings: ['_sorting'],
  tagName: 'th',

  canSort: true,

  getCanSort() {
    return get(this, OPTION_CAN_SORT);
  },

  getIsDescending() {
    return get(this, ATTR_IS_DESCENDING);
  },

  getName() {
    return get(this, OPTION_NAME);
  },

  getSort() {
    return get(this, OPTION_SORT);
  },

  setSort(sort) {
    set(this, OPTION_SORT, sort);
  },

  _sorting: computed(OPTION_CAN_SORT, OPTION_NAME, OPTION_SORT, function() {
    const canSort = this.getCanSort();
    const sort = this.getSort();
    const name = this.getName();

    if (!canSort) {
      return '';
    }
    if (sort && sort.includes(name)) {
      return this.getIsDescending() ? 'sorting_desc' : 'sorting_asc';
    }
    return 'sorting';
  }),

  _isDescending: computed(OPTION_SORT, {
    get() {
      const sort = this.getSort();
      return !sort || sort.startsWith('-');
    }
  }),

  click() {
    this.toggleProperty(ATTR_IS_DESCENDING);
    const order = this.getIsDescending() ? '-' : '';
    const sort = `${order}${this.getName()}`;
    this.setSort(sort);

    const onClick = get(this, OPTION_ON_CLICK);
    if (onClick) {
      onClick(sort);
    }
  }
});
