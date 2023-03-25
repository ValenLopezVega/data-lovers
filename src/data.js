export const filter = {
  typeFilter: function (arrData, n) {
    const typeFilterData = arrData.filter((elem) => elem.type.includes(n));
    return typeFilterData;
  },

  typeFilterGeneration: function (arrData, n) {
    const typeFilterDataGeneration = arrData.filter((elem) =>
      elem.generation.name.includes(n)
    );
    return typeFilterDataGeneration;
  },
};

export const order = {
  orderAscending: function (arrData) {
    const orderAs = arrData.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
    });
    return orderAs;
  },

  orderDescending: function (arrData) {
    const orderDes = arrData.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else if (b.name > a.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return orderDes;
  },
  orderNumber1:function (arrData) {
    const orderNum1 = arrData.sort((a, b) => {
      if (a.num> b.num) {
        return -1;
      } else if (b.num > a.num) {
        return 1;
      } else {
        return 0;
      }
    });
    return orderNum1;
  },
  orderNumber2: function (arrData) {
    const orderNum2 = arrData.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      } else if (b.num > a.num) {
        return -1;
      } else {
        return 0;
      }
    });
    return orderNum2;
  },
};

export const porcentajeFil ={
  porcentajePoder: function (number, percentage) {
    return ((number / 100) * percentage)
  }
}