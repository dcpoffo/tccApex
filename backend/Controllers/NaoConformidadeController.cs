using System;
using System.Threading.Tasks;
using API.data;
using API.models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class NaoConformidadeController : ControllerBase
    {
        private readonly IRepository _repositorio;

        public NaoConformidadeController(IRepository repositorio)
        {
            this._repositorio = repositorio;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _repositorio.GetAllNaoConformidadesAsync(true, true, true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter todas as Não Conformidades: \n{ex.Message}");
            }
        }

        [HttpGet("{naoConformidadeId}")]
        public async Task<IActionResult> GetById(int naoConformidadeId)
        {
            try
            {
                var result = await _repositorio.GetNaoConformidadeAsyncById(naoConformidadeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter a Não Conformidade: \n{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(NaoConformidade naoConformidade)
        {
            try
            {
                _repositorio.Add(naoConformidade);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(naoConformidade);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao salvar a Não Conformidade: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpPut("{naoConformidadeId}")]
        public async Task<IActionResult> Put(int naoConformidadeId, NaoConformidade naoConformidade)
        {
            try
            {
                var naoConformidadeCadastrada = await _repositorio.GetNaoConformidadeAsyncById(naoConformidadeId);

                if (naoConformidadeCadastrada == null)
                {
                    return NotFound();
                }

                _repositorio.Update(naoConformidade);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(naoConformidade);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao editar a Não Conformidade: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{naoConformidadeId}")]
        public async Task<IActionResult> Delete(int naoConformidadeId)
        {
            try
            {
                var naoConformidadeCadastrada = await _repositorio.GetNaoConformidadeAsyncById(naoConformidadeId);
                if (naoConformidadeCadastrada == null)
                {
                    return NotFound();
                }

                _repositorio.Delete(naoConformidadeCadastrada);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(
                         new
                         {
                             message = "Não Conformidade removida com sucesso"
                         }
                    );
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao deletar a Não Conformidade: {ex.Message}");
            }
            return BadRequest();
        }

    }
}