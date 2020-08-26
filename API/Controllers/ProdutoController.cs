using System;
using System.Threading.Tasks;
using API.data;
using API.models;
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
                        var result = await _repositorio.GetProdutoAsyncById(produtoId);
                        return Ok(result);
                  }
                  catch (Exception ex)
                  {
                        return BadRequest($"Erro ao obter o Produto: \n{ex.Message}");
                  }
            }

            [HttpPost]
            public async Task<IActionResult> Post(Produto produto)
            {
                 try
                 {
                     _repositorio.Add(produto);
                     if (await _repositorio.SaveChangesAsync())
                     {
                         return Ok(produto);
                     }
                 }
                 catch (Exception ex)
                 {
                     return BadRequest($"Erro ao salvar o Produto: {ex.Message}");
                 }
                 return BadRequest();
            }

          [HttpPut("{produtoId}")]
            public async Task<IActionResult> Put(int produtoId, Produto produto)
            {
                 try
                 {
                     var produtoCadastrado = await _repositorio.GetProdutoAsyncById(produtoId);
                     
                     if (produtoCadastrado == null)
                     {
                         return NotFound();
                     }

                     _repositorio.Update(produto);
                     if (await _repositorio.SaveChangesAsync())
                     {
                         return Ok(produto);
                     }
                 }
                 catch (Exception ex)
                 {
                     return BadRequest($"Erro ao editar o Produto: {ex.Message}");
                 }
                 return BadRequest();
            }
     }
}