import { FirebaseObject } from "../../firebase/classes/firebase-object";

export class District extends FirebaseObject{
    /**Id của quận/huyện */
    code: string;
    /**Tên quận/huyện */
    name: string;
    /**Kiểu của quận/huyện */
    name_with_type: string;
    /**Quận huyện thuộc tỉnh */
    path: string;
    /**Kiểu của huyện thuộc tỉnh */
    path_with_type: string;
    /**Id của tỉnh tương ứng */
    province_code: string
    /**Từ khóa của quận/huyện */
    slug: string;
    /**Kiểu*/
    type: string;

}