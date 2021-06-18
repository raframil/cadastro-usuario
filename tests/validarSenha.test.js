const { expect, beforeAll, it } = require("@jest/globals");
const Senha = require("../js/validarSenha.js");
const passwordGenerator = require('generate-password');

const mockUsuario = {
    nome: 'FooBar',
    ano: 1990,
    senha: ''
}

beforeAll(() => {
    const length = Math.random(1,30)
    const numbers = Math.random() < 0.5;
    const symbols = Math.random() < 0.5;
    senha = passwordGenerator.generate({ length, numbers, symbols });
    mockUsuario.senha = senha;
})

describe("Validar senha", () => {
  it("deve ter no mínimo 6 caracteres", () => {
    expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(false);
  });

  it("deve ter no máximo 20 caracteres", () => {
    expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(false);
  });

  it("deve possuir um caractere especial", () => {
    const regex =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    const testarSenha = regex.test(senha);
    expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(testarSenha);
  });

  it('deve possuir letras', () => {
    const regex = /[a-zA-Z]/g;
    const testarSenha = regex.test(senha);
    expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(testarSenha);
  })

  it('deve possuir números', () => {
    const regex = /\d/g;
    const testarSenha = regex.test(senha);
    expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(testarSenha);
  })

  it('não deve possuir nome do usuario', () => {
    const testeSenha = 'senhalegalFoo'
    if (testeSenha.includes(mockUsuario.nome)) {
        expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(false);
    }
  })

  it('não deve possuir ano do usuario', () => {
    const testeSenha = 'senha1990Nova!'
    if (testeSenha.includes(mockUsuario.ano)) {
        expect(Senha.validarSenha(mockUsuario.nome, mockUsuario.ano, mockUsuario.senha)).toBe(false);
    }
  })
});
