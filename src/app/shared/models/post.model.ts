import { ScullyRoute } from '@scullyio/ng-lib';

export interface BlogPost extends ScullyRoute {
  description?: string;
  author?: string;
  date?: Date;
  updated?: Date;
  keywords?: string[];
}
