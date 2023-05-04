using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddDefaultCommentValue : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 4, 11, 28, 44, 874, DateTimeKind.Utc).AddTicks(1524),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 4, 11, 5, 41, 104, DateTimeKind.Utc).AddTicks(9610));

            migrationBuilder.AlterColumn<string>(
                name: "Commentary",
                table: "RequestStatusLines",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 4, 11, 5, 41, 104, DateTimeKind.Utc).AddTicks(9610),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 4, 11, 28, 44, 874, DateTimeKind.Utc).AddTicks(1524));

            migrationBuilder.AlterColumn<string>(
                name: "Commentary",
                table: "RequestStatusLines",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldDefaultValue: "");
        }
    }
}
