import { Match } from './match';

export class Fixtures{
    /**id của Lịch thi đấu */
    id: string;
    /**id của giải đấu */
    league_id: string;
    /**tên của giải đấu */
    league_name: string;
    /**danh sách các trận đấu */
    matches: Array<Match>

}