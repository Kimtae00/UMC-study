import { status } from '../../config/respose.status';
import { getTempData, CheckFlag } from '../service/temp.service';
import { response } from '../../config/response';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};

// temp.controller.js
export const tempException = (req, res, next) => {
  const flag = req.params.flag;
  console.log("/temp/exception/"+flag);
  return res.send(response(status.SUCCESS, CheckFlag(flag)));
}