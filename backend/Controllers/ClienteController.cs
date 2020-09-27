using System;
using System.Threading.Tasks;
using API.data;
using API.models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ClienteController : ControllerBase
    {
        private readonly IRepository _repositorio;

        public ClienteController(IRepository repositorio)
        {
            this._repositorio = repositorio;            
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _repositorio.GetAllClientesAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter todos os clientes: \n{ex.Message}");
            }
        }

        [HttpGet("{clienteId}")]
        public async Task<IActionResult> GetById(int clienteId)
        {
            try
            {
                var result = await _repositorio.GetClienteAsyncById(clienteId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao obter o Cliente: \n{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Cliente cliente)
        {
            try
            {
                _repositorio.Add(cliente);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(cliente);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao salvar o Cliente: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpPut("{clienteId}")]
        public async Task<IActionResult> Put(int clienteId, Cliente cliente)
        {
            try
            {
                var clienteCadastrado = await _repositorio.GetClienteAsyncById(clienteId);

                if (clienteCadastrado == null)
                {
                    return NotFound();
                }

                _repositorio.Update(cliente);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(cliente);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao editar o cliente: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{clienteId}")]
        public async Task<IActionResult> Delete(int clienteId)
        {
            try
            {
                var clienteCadastrado = await _repositorio.GetClienteAsyncById(clienteId);
                if (clienteCadastrado == null)
                {
                    return NotFound();
                }

                _repositorio.Delete(clienteCadastrado);
                if (await _repositorio.SaveChangesAsync())
                {
                    return Ok(
                         new
                         {
                             message = "Cliente removido com sucesso"
                         }
                    );
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao deletar o cliente: {ex.Message}");
            }
            return BadRequest();
        }
    }
}