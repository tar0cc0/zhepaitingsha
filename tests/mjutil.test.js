import * as mjutil from '../src/js/mjutil.js';

// 4 tiles
describe('getWaitedTiles', () => {
  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,5,6,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,5,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,5,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,4,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,7,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,6,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,7,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,2,2];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [8,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7,8]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,2,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [2,2,6,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [3,4,4,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [5,5,5,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });
});

// 7 tiles
describe('getWaitedTiles', () => {
  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,4,5,6,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,3,4,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,6,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,4,5,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,3,4,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,6,6,7,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,6,6,7,7,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,5,6,7,7,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,3,3,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,4,5,6,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,4,4,4,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,4,4,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,4,5,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,4,5,6,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,6,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,4,5,6,7,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,5,6,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,5,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,5,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,5,6,7,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,3,4,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,4,5]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,7,7,8,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,3,3,3,4,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,4,5,5,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,4,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,7,7,8,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,2,2,3];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,5,5,6,6,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,6,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,7,7,8,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,4,6,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,4,5,5,5,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,4,4,4,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,6,6,6,6,7,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5,7,8]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [3,4,4,4,5,6,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,2,3,4,5,7,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [4,5,5,6,7,7,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,2,2,3,4,5,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [2,2,4,4,5,6,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,3,4,4,4,4,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });
});

// 10 tiles
describe('getWaitedTiles', () => {
  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,3,4,5,6,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,4,5,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,5,6,7,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,4,5,6,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,4,5,6,7,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,4,5,6,7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,4,5,6,7,8,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,5,6,7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,3,5,5,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,2,3,3,4,4,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,4,4,5,5,6,6,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,3,4,6,7,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,2,4,4,5,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,4,7,7,7,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,2,3,3,4,5,5,7,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,3,4,5,5,7,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,4,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,4,4,6,6,6,6,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,4,4,4,5,5,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,5,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,4,4,5,6,7,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,3,4,5,6,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,2,3,3,3,3,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,5]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,3,3,4,4,5,5,5,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,4,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [4,5,5,5,5,6,6,6,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [7,7,7,8,8,8,8,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6,7,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,3,3,4,4,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,4,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,5,6,6,7,7,7,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5,6,7,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,3,3,3,3,4,4,5,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,4,5,5,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,3,4,4,4,4,5,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,5,6,6,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,6,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,4,5,6,6,6,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,4,4,4,5,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,3,3,3,4,4,4,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [5,5,5,6,6,6,7,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,6,7,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,4,5,5,5,6,7,7,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,5,6,7,8]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,2,3,4,5,5,5,7,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,3,3,4,4,5,5,5,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [2,2,2,4,4,6,6,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,1,1,1,2,3,4,4,4,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });
});

// 13 tiles
describe('getWaitedTiles', () => {
  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,3,4,5,6,7,8,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,2,2,2,3,3,4,4,5,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,4,6,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,2,3,3,4,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,1,2,2,2,3,3,3,4,4,5];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,5,6]);
  });

  test('should not return tiles that already have 4 copies in hand', () => {
    const tiles = [1,1,1,1,2,2,2,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3]);
  });

  test('should not return tiles that already have 4 copies in hand', () => {
    const tiles = [1,2,3,3,4,5,6,6,6,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,9]);
  });

  test('should not return tiles that already have 4 copies in hand', () => {
    const tiles = [1,1,1,1,2,2,2,2,3,3,3,3,4];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,5]);
  });

  test('should return correct waits for a 7 pairs hand', () => {
    const tiles = [1,1,3,3,4,4,6,6,7,7,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([8]);
  });

  test('should return correct waits for a 7 pairs hand', () => {
    const tiles = [1,1,1,1,3,3,6,6,6,7,7,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([6]);
  });

  test('should return correct waits for a 7 pairs hand', () => {
    const tiles = [1,1,2,2,3,3,4,4,5,5,6,6,7];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7]);
  });

  test('should return correct waits for a 7 pairs hand', () => {
    const tiles = [1,1,2,2,2,3,3,4,4,5,5,6,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,2,3,6]);
  });

  test('should return correct waits for a 7 pairs hand', () => {
    const tiles = [5,5,6,6,7,7,8,8,8,9,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,7,8]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,1,1,1,2,2,2,2,3,3,3,5,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [1,1,2,3,3,4,4,5,6,8,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [3,3,4,4,4,4,5,6,6,7,7,7,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return [] for a hand that cannot win with any tile', () => {
    const tiles = [2,2,2,2,4,5,5,6,7,7,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,3,3,4,4,5,5,6,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,5,6]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,4,5,5,6,6,7,7,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,2,3,4,4,5,6,7,8,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,3,3,4,4,5,5,6,7,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,3,5,6,6,7,7,8,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,2,3,3,5,6,6,7,7,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,4,4,4,6,6,7,9,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,3,3,4,5,5,6,6,7,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,3]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,3,3,4,4,4,5,6,7,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,3,5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,3,3,4,4,4,4,5,7,7,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,2,2,2,3,3,3,4,5,6,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,4,4,5,5,6,7,7,8,8,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([3,4,6,7,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,2,2,3,3,4,4,4,5,6,7,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,3,4,5,6,7,8,8,8,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,9]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [3,3,4,4,4,6,6,7,7,8,8,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,1,3,4,6,6,7,7,7,9,9,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([2,5]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,3,3,3,5,5,5,6,6,6,8,9];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,2,3,3,4,5,6,6,7,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([5,8]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,2,3,4,5,5,6,8,8,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [2,2,2,3,3,3,5,6,6,6,6,8,8];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([4,7]);
  });

  test('should return correct tiles for a hand that can win with some tiles', () => {
    const tiles = [1,1,2,3,3,3,3,4,4,4,5,5,6];
    const waited = mjutil.getWaitedTiles(tiles);
    expect(waited).toEqual([1,6]);
  });
});
