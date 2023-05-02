using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddFurnitureProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Furniture",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<float>(
                name: "Depth",
                table: "Furniture",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Height",
                table: "Furniture",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "ProductLink",
                table: "Furniture",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "Width",
                table: "Furniture",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_CategoryId",
                table: "Furniture",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_Categories_CategoryId",
                table: "Furniture",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_Categories_CategoryId",
                table: "Furniture");

            migrationBuilder.DropIndex(
                name: "IX_Furniture_CategoryId",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "Depth",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "ProductLink",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "Furniture");
        }
    }
}
