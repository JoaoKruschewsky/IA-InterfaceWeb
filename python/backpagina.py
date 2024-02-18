from flask import Flask, render_template, request, redirect, url_for, session
import joblib
import pyodbc

app = Flask(__name__)

model = joblib.load('modelo.pkl')
lista_pag = []

@app.route("/")
def index():
    lista_pag.append('login')
    print(lista_pag)
    return render_template("login.html")

@app.route("/voltar", methods=['POST'])
def voltar_pg():
    print(lista_pag)
    lista_pag.pop()
    print(lista_pag)
    return render_template(lista_pag[-1]+'.html')


@app.route("/predict", methods=["POST"])
def predict():
    ScoreDeCredito = float(request.form["ScoreDeCredito"])
    Idade = int(request.form["Idade"])
    TempoDeAssociacao = int(request.form["TempoDeAssociacao"])
    Saldo = float(request.form["Saldo"])
    NumDeProdutos = int(request.form["NumDeProdutos"])
    TemCartaoCred = int(request.form["TemCartaoCred"])
    MembroAtivo = int(request.form["MembroAtivo"])
    SalarioEstimado = float(request.form["SalarioEstimado"])
    Genero_Male = float(request.form["Genero_Male"])
    Pais_codificado = float(request.form["Pais_codificado"])

    feature_data = [ScoreDeCredito, Idade, TempoDeAssociacao, Saldo, NumDeProdutos, TemCartaoCred, MembroAtivo,SalarioEstimado, Genero_Male, Pais_codificado]
    
    prediction = model.predict([feature_data])[0]
    
    if prediction == 1:
        lista_pag.append('result') 
        return render_template('result.html', prediction_text="O cliente irá cancelar")
    else:
        lista_pag.append('result') 
        return render_template('result.html', prediction_text="O cliente não irá cancelar")
    
@app.route("/login", methods=["POST"])
def login():
   CPF = request.form["CPF"]
   senha = request.form["senha"]


   if CPF == "joao":
       if senha == "123 ":
            lista_pag.append('home')
            return render_template("Home.html")
   else:
       return render_template("login.html", erro_text="Usuário ou senha inválido, por favor digite novamente!")
               
@app.route("/relatorio", methods=["GET"])
def pag_relatorio():
    lista_pag.append('relatorio')
    return render_template("Relatorio.html")

@app.route("/dashboard", methods=["GET"])
def pag_dashboard():
    lista_pag.append('dashboard')
    return render_template("Dashboard.html")

@app.route("/home", methods=["GET"])
def pag_home():
    lista_pag.append('home')
    print(lista_pag)
    return render_template("Home.html")

@app.route("/churn", methods=["GET"])
def pag_churn():
    lista_pag.append('churn')
    return render_template("churn.html")


if __name__ == "__main__":
    app.run(debug=True)

