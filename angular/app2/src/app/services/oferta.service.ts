import {Oferta} from "../../shared/ofertas.model";

export class OfertaService {
  public ofertas: Oferta[] = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao_oferta: "Rod�zio de Mini-hamb�rger com op��o de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/1/img1.jpg"},
        {url: "/assets/ofertas/1/img2.jpg"},
        {url: "/assets/ofertas/1/img3.jpg"},
        {url: "/assets/ofertas/1/img4.jpg"}
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almo�o ou Jantar com Rod�zio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/2/img1.jpg"},
        {url: "/assets/ofertas/2/img2.jpg"},
        {url: "/assets/ofertas/2/img3.jpg"},
        {url: "/assets/ofertas/2/img4.jpg"}
      ]

    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Est�ncia das �guas",
      descricao_oferta: "Divers�o garantida com piscinas, trilhas e muito mais.",
      anunciante: "Est�ncia das �guas",
      valor: 31.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/3/img1.jpg"},
        {url: "/assets/ofertas/3/img2.jpg"},
        {url: "/assets/ofertas/3/img3.jpg"},
        {url: "/assets/ofertas/3/img4.jpg"},
        {url: "/assets/ofertas/3/img5.jpg"},
        {url: "/assets/ofertas/3/img6.jpg"}
      ]
    }
  ]
  public getOfertas(): Array<Oferta> {
    return this.ofertas
  }
  public getOfertas2(): Promise<Oferta[]>{
    return new Promise((resolve , reject)=>{
      resolve(this.ofertas)
    })
  }
}
