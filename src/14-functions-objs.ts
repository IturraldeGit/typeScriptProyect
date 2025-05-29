(()=>{
  const login = (data: { email: string, password: string }) => {
    console.log('Email: ', data.email);
    console.log('Password: ', data.password);
  }
  login({
    email: 'email@gmail.com',
    password: '123456'
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

    const addProcuct = (data: {
      title: string;
      cretedAt: Date;
      stock: number;
      size?: Sizes;
    }) => {
      products.push(data);
    }

    addProcuct({
      title: 'Product 1',
      cretedAt: new Date(),
      stock: 10,
      size: 'S'
    });

    addProcuct({
      title: 'Product 2',
      cretedAt: new Date(),
      stock: 20
    });

    console.log(products);
})()
