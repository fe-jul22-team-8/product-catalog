import express from 'express';
// import express from 'express';
import * as phoneController from '../controller/phones.js';
// export const showPhones = (app: Express) => {
export const showPhones = (app) => {
    const router = express.Router();
    app.use('/phones', router);
    router.get('/', phoneController.getMany);
};
