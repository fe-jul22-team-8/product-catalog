import express from 'express';
import * as phoneController from '../controller/phones.js'

export const router = express.Router();

router.get('/', phoneController.getAll);

router.get('/:phoneId', phoneController.getOne);
