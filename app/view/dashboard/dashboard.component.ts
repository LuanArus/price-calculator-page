import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatternComponent } from '@view/pattern/pattern.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MainComponent } from '@view/main/main.component';
import { LeftMenuItem } from 'src/app/components/leftmenu/leftmenu.component';
import { MainService } from '@controller/main.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	standalone: false,
})

export class DashboardComponent extends PatternComponent {

	public menuItems: LeftMenuItem[] = [];
	public manualText?: string;

	constructor(public override mainService: MainService,
		protected override formBuilder: FormBuilder,
		protected override confirmationService: ConfirmationService,
		protected override messageService: MessageService,
		protected route: Router,
		protected mainComponent: MainComponent) {
		super(mainService, formBuilder, confirmationService, messageService);
	}

	public override ngOnInit(): void {
		super.ngOnInit();
		this.getManualText();
	}

	public override ngDoCheck(): void {
		super.ngDoCheck();
	}

	protected override canRegisterClose(): void { }

	public contactSupport(): void {
		window.open(`https://wa.me/5554999685468?text=Olá, preciso de um suporte referente a Calculadora de Preços`, '_blank');
	}

	public getManualText(): void {
		this.manualText = `
			Manual de Instruções — App de Precificação
               1. Objetivo do aplicativo

               O App de Precificação tem como finalidade ajudar você a formar preços corretamente, considerando:

               Custos variáveis

               Custos fixos

               Impostos (modelo atual e pós-reforma)

               Margem de lucro

               O foco é garantir que o preço final cubra todos os custos e gere resultado real para a empresa.

               2. Conceitos fundamentais

               Antes de usar o app, é importante entender três pilares da precificação:

               ✅ Custos Variáveis

               São aqueles que mudam conforme o volume de vendas. Exemplos:

               Taxas de cartão

               Comissões de vendedores ou marketplaces

               Fretes

               Embalagens

               Outras despesas diretamente ligadas à venda

               Esses valores devem ser informados no app como percentual por venda, conforme o campo disponível.

               ✅ Custos Fixos

               São despesas que existem independentemente de vender mais ou menos:

               Folha de pagamento

               Aluguel

               Água

               Energia elétrica

               Internet

               Sistemas

               Contabilidade

               Outras despesas administrativas

               O app trabalha com o valor do custo fixo sobre o faturamento.

               Como calcular o percentual/valor do custo fixo:

               Use a fórmula:

               Custo Fixo ÷ Faturamento = % de Custo Fixo

               Exemplo:

               Custo fixo mensal: R$ 15.000

               Faturamento mensal: R$ 60.000

               Cálculo:

               15.000 ÷ 60.000 = 25%

               👉 Portanto, seu custo fixo representa 25% do faturamento.

               Agora, aplicando isso em um produto de R$ 50,00:

               25% de 50,00 = R$ 12,50

               Ou seja:
               👉 Em um produto de R$ 50,00, R$ 12,50 são apenas para pagar custos fixos.

               Para esse exemplo é o valor que deve ser informado no campo de custo fixo do app.

               3. Impostos — como preencher no aplicativo

               O app permite trabalhar com dois cenários:

               🔹 Modelo atual (antes da Reforma Tributária)

               Hoje, os impostos são calculados por dentro do preço.

               Isso significa que:

               O valor do produto/serviço

               E o valor da nota fiscal

               são o mesmo.

               O imposto já está embutido no preço de venda.

               Neste caso, no campo Impostos %, informe:

               ICMS + PIS + COFINS
               ou

               A alíquota do Simples Nacional (conforme o anexo da empresa)

               🔹 Modelo pós-Reforma Tributária

               Após a reforma:

               👉 Os impostos passam a ser calculados por fora do preço.

               Isso muda totalmente a lógica:

               Um valor é o preço do produto/mercadoria/serviço

               Outro valor é o total da nota fiscal

               Pois o imposto será somado ao final.

               Em outras palavras:

               Preço do produto + Imposto = Valor da Nota Fiscal

               Por isso, no pós-reforma:

               O cliente verá dois valores:

               valor do item

               valor do imposto

               E o total da NF será maior que o preço do produto.

               📌 Qual percentual usar no pós-reforma?

               Enquanto as alíquotas oficiais não forem totalmente divulgadas:

               👉 Sugestão prática: utilizar 28% como referência (IBS + CBS).

               Quando houver publicação definitiva das alíquotas:

               👉 Substituir esse percentual pelo valor oficial.

               4. Fluxo básico de uso do app

               Informe o custo do produto ou serviço

               Preencha as despesas variáveis (cartão, comissão, frete etc.)

               Informe o valor do custo fixo calculado sobre o preço de venda

               Preencha o campo de impostos (%) conforme o regime atual ou pós-reforma

               Defina a margem de lucro desejada

               O app retornará:

               Preço ideal de venda

               Valor do imposto (quando aplicável)

               Resultado real da operação

               5. Ponto de atenção importante

               Nunca precifique apenas “olhando o concorrente”.

               Sem considerar:

               Custos fixos

               Custos variáveis

               Impostos

               Margem

               o risco é vender muito e mesmo assim ter prejuízo.

               O app existe justamente para evitar esse erro e ajudá-lo a se guiar pela condiçao econômica e financeira
               do seu negócio.
		`;
	}

	public async onNew(): Promise<void> { }

	protected override setValidators(): void { }

	protected override setValidatorValues(): void { }

}
