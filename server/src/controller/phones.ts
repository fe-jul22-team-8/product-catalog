import * as phoneService from '../service/phones.js';
import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
  const phones = phoneService.getAll();

  const perPage = req.query.perPage || phones.length;

  const page = req.query.page || 1;

  const startIndex = (+page - 1) * +perPage;
  const endIndex = +page * +perPage;
  const pageCount = Math.ceil(phones.length / perPage);

  if (perPage || page) {
    const resultPerPage = phones.slice(startIndex, endIndex);

    res.send({
      resultPerPage,
      page,
      pageCount,
    });
    return;
  }

  res.send(phones);
};

export const getOne = (req: Request, res: Response) => {
  const { phoneId } = req.params;

  const foundPhone = phoneService.getById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);
    return;
  }

  res.send(foundPhone);
};
