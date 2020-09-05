using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class RNC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NaoConformidade",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantidade = table.Column<double>(nullable: false),
                    DataAbertura = table.Column<DateTime>(nullable: false),
                    ClienteId = table.Column<int>(nullable: false),
                    ProdutoId = table.Column<int>(nullable: false),
                    ProblemaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NaoConformidade", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NaoConformidade_Cliente_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Cliente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NaoConformidade_Problema_ProblemaId",
                        column: x => x.ProblemaId,
                        principalTable: "Problema",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NaoConformidade_Produto_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produto",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "NaoConformidade",
                columns: new[] { "Id", "ClienteId", "DataAbertura", "ProblemaId", "ProdutoId", "Quantidade" },
                values: new object[] { 1, 1, new DateTime(2020, 9, 3, 23, 43, 43, 655, DateTimeKind.Local).AddTicks(5106), 1, 1, 10.0 });

            migrationBuilder.InsertData(
                table: "NaoConformidade",
                columns: new[] { "Id", "ClienteId", "DataAbertura", "ProblemaId", "ProdutoId", "Quantidade" },
                values: new object[] { 2, 2, new DateTime(2020, 9, 3, 23, 43, 43, 656, DateTimeKind.Local).AddTicks(6782), 2, 2, 100.0 });

            migrationBuilder.InsertData(
                table: "NaoConformidade",
                columns: new[] { "Id", "ClienteId", "DataAbertura", "ProblemaId", "ProdutoId", "Quantidade" },
                values: new object[] { 3, 2, new DateTime(2020, 9, 3, 23, 43, 43, 656, DateTimeKind.Local).AddTicks(6868), 4, 3, 50.0 });

            migrationBuilder.CreateIndex(
                name: "IX_NaoConformidade_ClienteId",
                table: "NaoConformidade",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_NaoConformidade_ProblemaId",
                table: "NaoConformidade",
                column: "ProblemaId");

            migrationBuilder.CreateIndex(
                name: "IX_NaoConformidade_ProdutoId",
                table: "NaoConformidade",
                column: "ProdutoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NaoConformidade");
        }
    }
}
