using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class SegundaMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "Id", "Descricao", "UnidadeMedida" },
                values: new object[,]
                {
                    { 1, "Cabo PP Plano 3x0,50 NBR14897", "Metro" },
                    { 2, "Cabo PP Circular 3x0,50 NBR247", "Metro" },
                    { 3, "Cabo Techflex 1x0,50 NBR9117 - BR", "Metro" },
                    { 4, "Cabo Techflex 1x0,75 DIN - PT", "Metro" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Produto",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Produto",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Produto",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Produto",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
