import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientes1590757400019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'celular',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'rua',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cidade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dt_niver',
            type: 'timestamp with time zone', //com mysql eh timestamp
            isNullable: true,
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes');
  }
}
