import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'case1',
    username: 'root',
    password: '123456',
    synchronize: true,
    entities: ['dist/src/model/*.js']
})