using System;
using System.Threading.Tasks;
using API.data;
using API.models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ProblemaController : ControllerBase
    {
        private readonly IRepository _repositorio;

        public ProblemaController(IRepository repositorio)
        {
            this._repositorio = repositorio;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _repositorio.GetAllProblemasAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter todos os problemas: \n{ex.Message}");
            }
        }

        [HttpGet("{problemaId}")]
        public async Task<IActionResult> GetById(int problemaId)
        {
            try
            {
                var result = await _repositorio.GetProblemaAsyncById(problemaId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter o Problema: \n{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Problema problema)
        {
            try
            {
                _repositorio.Add(problema);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(problema);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao salvar o Problema: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpPut("{problemaId}")]
        public async Task<IActionResult> Put(int problemaId, Problema problema)
        {
            try
            {
                var problemaCadastrado = await _repositorio.GetProblemaAsyncById(problemaId);

                if (problemaCadastrado == null)
                {
                    return NotFound();
                }

                _repositorio.Update(problema);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(problema);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao editar o Problema: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{problemaId}")]
        public async Task<IActionResult> Delete(int problemaId)
        {
            try
            {
                var problemaCadastrado = await _repositorio.GetProblemaAsyncById(problemaId);
                if (problemaCadastrado == null)
                {
                    return NotFound();
                }

                _repositorio.Delete(problemaCadastrado);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(
                         new
                         {
                             message = "Problema removido com sucesso"
                         }
                    );
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao deletar o Problema: {ex.Message}");
            }
            return BadRequest();
        }
    }
}