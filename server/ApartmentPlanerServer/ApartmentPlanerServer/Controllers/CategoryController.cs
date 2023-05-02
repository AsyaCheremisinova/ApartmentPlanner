﻿using Application.Interfaces;
using Application.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public ICollection<CategoryResponseDto> GetAllCategories()
        {
            return _categoryService.GetCategories();
        }
    }
}
