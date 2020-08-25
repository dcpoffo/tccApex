using System;
using System.Threading.Tasks;
using API.data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
     [ApiController]
     [Route("[controller]")]

     public class ProdutoController : ControllerBase
     {
          private readonly IRepository _repositorio;

          public ProdutoController(IRepository repositorio)
          {
               this._repositorio = repositorio;
          }

          [HttpGet]
          public async Task<IActionResult> GetAll()
          {
               try
               {
                    var result = await _repositorio.GetAllProdutosAsync();
                    return Ok(result);
               }
               catch (Exception ex)
               {
                    return BadRequest($"Erro ao obter todos os produtos: \n{ex.Message}");
               }
          }

          [HttpGet("{produtoId}")]
            public async Task<IActionResult> GetById(int produtoId)
            {
                  try
                  {
                        var result = await _repositorio.GetProdutosAsyncById(produtoId);
                        return Ok(result);
                  }
                  catch (Exception ex)
                  {
                        return BadRequest($"Erro ao obter o Produto: \n{ex.Message}");
                  }
            }
     }
}