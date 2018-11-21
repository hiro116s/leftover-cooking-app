import { SQLite } from 'expo';

const DB: SQLite.Database = SQLite.openDatabase('db.db');
DB.transaction((tx: SQLite.Transaction) => {
    tx.executeSql('drop table if exists history;');
    tx.executeSql(
        'create table if not exists history (id integer primary key not null, createdAt text, recipesSeparatedByComma text);'
    );
});

export { DB };