import axios from 'axios';

export const api=axios.create({
    baseUrl:'https://corebiz-test.herokuapp.com/api/v1/products'
})