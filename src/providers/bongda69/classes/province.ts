import { FirebaseObject } from "../../firebase/classes/firebase-object";

export class Province extends FirebaseObject{
    /**code của thành phố */
    code: string;
    /**tên thành phố */
    name: string;
    /**kiểu thành phố */
    name_with_type: string;
    /**từ khóa */
    slug: string;
    /**kiểu */
    type: string;
}