using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class Reset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 1,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 5, 8, 40, 48, 316, DateTimeKind.Local).AddTicks(4158));

            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 2,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 5, 8, 40, 48, 319, DateTimeKind.Local).AddTicks(27));

            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 3,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 5, 8, 40, 48, 319, DateTimeKind.Local).AddTicks(251));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 1,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 3, 23, 43, 43, 655, DateTimeKind.Local).AddTicks(5106));

            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 2,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 3, 23, 43, 43, 656, DateTimeKind.Local).AddTicks(6782));

            migrationBuilder.UpdateData(
                table: "NaoConformidade",
                keyColumn: "Id",
                keyValue: 3,
                column: "DataAbertura",
                value: new DateTime(2020, 9, 3, 23, 43, 43, 656, DateTimeKind.Local).AddTicks(6868));
        }
    }
}
