describe("initialization", function(){
    it ("should load all the tiles", function(){
      expect(tiles).toBeDefined();
  });
  });
    
    describe("unflipCards", function(){
    it ("should display the front card", function(){
        expect(memory_tile_ids).toBeDefined();
    });
  });
   
  describe("resetGameBoard", function(){
    it ("should have all the tiles unflipped", function(){
        expect(lockBoard,hasFlippedCard).toBe(false);
    });
    it ("should have the board unset", function(){
    [hasFlippedCard, lockBoard] = [false, false];
        expect(lockBoard).toBe(false);
    });
   
   
  })
  describe("shuffleCards", function(){
    it ("should be able to shuffle the tiles", function(){
        expect(tiles).toBeDefined();
    });
  });