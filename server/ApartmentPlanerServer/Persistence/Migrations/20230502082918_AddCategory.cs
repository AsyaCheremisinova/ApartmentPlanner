using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Statuses_StatusId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Depth",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Link",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Manufacturer",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Material",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "SourceFile",
                table: "Furniture");

            migrationBuilder.AlterColumn<int>(
                name: "StatusId",
                table: "Requests",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "FurnitureId",
                table: "Requests",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ImageId",
                table: "Furniture",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Furniture",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SourceFileId",
                table: "Furniture",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "File",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Data = table.Column<byte[]>(type: "bytea", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_File", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Requests_FurnitureId",
                table: "Requests",
                column: "FurnitureId");

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_ImageId",
                table: "Furniture",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_SourceFileId",
                table: "Furniture",
                column: "SourceFileId");

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_File_ImageId",
                table: "Furniture",
                column: "ImageId",
                principalTable: "File",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_File_SourceFileId",
                table: "Furniture",
                column: "SourceFileId",
                principalTable: "File",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Furniture_FurnitureId",
                table: "Requests",
                column: "FurnitureId",
                principalTable: "Furniture",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Statuses_StatusId",
                table: "Requests",
                column: "StatusId",
                principalTable: "Statuses",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_File_ImageId",
                table: "Furniture");

            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_File_SourceFileId",
                table: "Furniture");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Furniture_FurnitureId",
                table: "Requests");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Statuses_StatusId",
                table: "Requests");

            migrationBuilder.DropTable(
                name: "File");

            migrationBuilder.DropIndex(
                name: "IX_Requests_FurnitureId",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Furniture_ImageId",
                table: "Furniture");

            migrationBuilder.DropIndex(
                name: "IX_Furniture_SourceFileId",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "FurnitureId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "SourceFileId",
                table: "Furniture");

            migrationBuilder.AlterColumn<int>(
                name: "StatusId",
                table: "Requests",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Depth",
                table: "Requests",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Height",
                table: "Requests",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Requests",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Requests",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Manufacturer",
                table: "Requests",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Material",
                table: "Requests",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Requests",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "Width",
                table: "Requests",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<byte[]>(
                name: "SourceFile",
                table: "Furniture",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Statuses_StatusId",
                table: "Requests",
                column: "StatusId",
                principalTable: "Statuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
