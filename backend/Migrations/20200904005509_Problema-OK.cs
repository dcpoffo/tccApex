using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class ProblemaOK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 1,
                column: "Descricao",
                value: "Cabo não decapa");

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 2,
                column: "Descricao",
                value: "Diâmetro acima do especificado");

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 3,
                column: "Descricao",
                value: "Diâmetro abaixo do especificado");

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 4,
                column: "Descricao",
                value: "Cabo com tonalidade");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 1,
                column: "Descricao",
                value: null);

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 2,
                column: "Descricao",
                value: null);

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 3,
                column: "Descricao",
                value: null);

            migrationBuilder.UpdateData(
                table: "Problema",
                keyColumn: "Id",
                keyValue: 4,
                column: "Descricao",
                value: null);
        }
    }
}
