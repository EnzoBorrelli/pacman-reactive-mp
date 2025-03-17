import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction, objectSize } from "~/components/enums/global";
import { Maps } from "~/components/enums/maps";
import { Tiles } from "~/components/enums/tiles";

export interface Tile {
  type:Tiles
  position: { x: number; y: number };
  direction: Direction;
  flip?: boolean;
}

export interface Dot {
  power: boolean;
  position: { x: number; y: number };
}

interface MapState{
  tiles: Tile[];
  dots: Dot[];
  tileSize: objectSize;
  mapSize: { x: number; y: number };
}

const initialState: MapState = {
  tiles:[{
    type:Tiles.doubleWall,
    position:{x:0,y:0},
    direction:Direction.right
  }],
  dots:[{
    power:false,
    position:{x:24,y:24}
  }],
  tileSize: objectSize.classic,
  mapSize: Maps.classicMap
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapTiles: (state, action: PayloadAction<Tile[]>) => {
      state.tiles = action.payload;
    },
    setMapDots: (state, action: PayloadAction<Dot[]>) => {
      state.dots = action.payload;
    },
    addTile: (state, action: PayloadAction<Tile>) => {
      state.tiles.push(action.payload);
    },
    removeTile: (state, action: PayloadAction<number>) => {
      state.tiles.splice(action.payload, 1);
    },
    setTileSize: (state, action: PayloadAction<objectSize>) => {
      state.tileSize = action.payload;
    },
    setMapSize: (state, action: PayloadAction<{x:number,y:number}>) => {
      state.mapSize = action.payload;
    },
  },
});

export const { setMapTiles, addTile, removeTile, setTileSize,setMapSize } = mapSlice.actions;
export default mapSlice.reducer;
