
import { fillInitialBoard, getAllCells } from '../../model/types/board';
export default test('initTable', (): void => {
  fillInitialBoard();
  console.log(getAllCells());
  expect(1 + 2).toBe(3);
});
