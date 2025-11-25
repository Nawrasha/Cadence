
CREATE TABLE   IF NOT EXISTS categories (
    id INT PRIMARY KEY,
    label VARCHAR(100),
    image VARCHAR(500)
);



CREATE TABLE  IF NOT EXISTS products (
    id INT PRIMARY KEY,
    label VARCHAR(150),
    title VARCHAR(255),
    price DECIMAL(10,2),
    review DECIMAL(3,1),
    description TEXT,
    availabilities INT,
    brand VARCHAR(100),
    category INT,
    remise INT,
    stock INT,
    color VARCHAR(50),
    FOREIGN KEY (category) REFERENCES categories(id)
);


CREATE TABLE  IF NOT EXISTS images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product INT NOT NULL,
    url VARCHAR(500),
    FOREIGN KEY (product) REFERENCES products(id)
);



INSERT INTO products (id, label, title, price, review, description, availabilities, brand, category, remise, stock, color) VALUES
(1, 'test 1', 'Beagle Paw Ceramic Candle Warmer', 100, 2, 'This Beagle Paw Ceramic Candle Warmer provides a safe and efficient way to enjoy the soothing scents of your favorite candles without the risk of an open flame. The paw design adds a charming touch to any room. Made of durable ceramic, it is built to last.', 2, 'brand1', 1, 40, 5, 'Blue'),
(2, '200', 'White Ceramic Candle Holder Model', 300, 2, 'Crafted from high-quality ceramic, our White Ceramic Candle Holder Model adds a touch of elegance to any room. Its sleek design and smooth finish make it a versatile piece for both modern and traditional decor. Enjoy a warm and cozy atmosphere with our versatile candle holder.', 2, 'brand1', 1, 0, 8, 'Black'),
(3, '100.20', 'Pumpkin candle Ceramic jar', 300, 2, 'Illuminate your space with our Pumpkin Candle in a beautiful Ceramic Jar. Made with natural wax and a ceramic jar, this candle creates a warm, cozy ambiance that will enhance any room. The perfect blend of earthy pumpkin and calming fragrance, our candle adds a touch of nature to your home.', 2, 'brand2', 1, 20, 0, 'Brown'),
(4, '100.20', 'Nordic Style Ceramic Candle Holder', 300, 2, 'Introduce a touch of Scandinavian charm to your home decor with the Nordic Style Ceramic Candle Holder. Its clean lines and simple design make it the perfect addition to any room. Made from high-quality ceramic, this candle holder is not only stylish but also durable. Transform your space and create a cozy ambiance with this versatile candle holder.', 2, 'brand2', 1, 0, 10, 'Black'),
(5, '100.20', 'Curved Candle Jar Cement', 300, 2, 'Create a warm and inviting atmosphere with our Curved Candle Jar Cement. The unique curved design adds a touch of elegance while the cement material provides stability and durability. Perfect for any home decor, this candle jar is a must-have for any candle lover.', 2, 'brand3', 1, 50, 15, 'Orange'),
(6, '100.20', 'Soy Off-White Twisted Candle', 100, 2, 'This Soy Off-White Twisted Candle is made from high-quality soy wax and features a unique twisted design. Crafted by industry experts, it provides a longer burn time and emits a cleaner, more natural scent compared to traditional candles. Perfect for creating a cozy ambiance in any room.', 2, 'brand4', 2, 50, 0, 'Orange'),
(7, '100.20', 'Soy Off-White Swirl Candle', 210, 2, 'This Soy Off-White Swirl Candle is perfect for creating a calming atmosphere in any space. Made with soy wax, it burns cleanly and evenly, while the off-white swirl design adds a touch of elegance. Enjoy the benefits of a soy-based candle that is both eco-friendly and long-lasting.', 2, 'brand1', 2, 50, 0, 'Black'),
(8, '100.20', 'Soy Off-White Twisted Candle', 140, 2, 'Create a warm and inviting atmosphere with our Curved Candle Jar Cement. The unique curved design adds a touch of elegance while the cement material provides stability and durability. Perfect for any home decor, this candle jar is a must-have for any candle lover.', 2, 'brand2', 2, 50, 14, 'White'),
(9, '100.20', 'Moon Soy Wax Candle', 170, 2, 'Illuminate any space with the Moon Soy Wax Candle. Made with 100% natural soy wax, this candle burns cleaner and longer for a more eco-friendly experience. With a soft, romantic scent, it creates a peaceful atmosphere. Hand-poured in small batches, each candle is unique and perfect for relaxation.', 2, 'brand3', 2, 50, 12, 'Brown'),
(10, '100.20', 'Aesthetic candles', 50, 2, 'Elevate your home décor with our high-quality aesthetic candles. Infused with natural scents, these candles add a touch of luxury to any space. Hand-crafted with care, our candles are perfect for creating a peaceful ambiance or as a unique gift for any occasion. Bring beauty and relaxation into your home with our aesthetic candles.', 2, 'brand3', 2, 50, 15, 'Orange'),
(11, '100.20', 'Rose Candle Jar Silicone', 40, 2, 'This Rose Candle Jar Silicone is perfect for adding a touch of elegance to any room. Made with high-quality materials, it offers durability and a sleek design. Its silicone construction allows for easy cleaning and maintenance, making it a practical and stylish addition to your home decor.', 2, 'brand1', 3, 50, 0, 'Blue'),
(12, '100.20', 'romantic scallop ocean Candle', 320, 2, 'This elegant candle features a romantic scent with notes of the ocean and scallop. Indulge in a relaxing ambiance as you enjoy the calming and refreshing aroma. Handcrafted with care, this candle is the perfect addition to your self-care routine or to create a romantic atmosphere.', 2, 'brand2', 3, 15, 10, 'Black'),
(13, '100.20', 'Mermaid Candle', 100, 2, 'Expertly crafted Mermaid Candle, perfect for adding a touch of enchantment to any room. Made with premium wax and a beautiful, intricate design, this candle will fill your space with a soothing and mesmerizing glow. A must-have for any mermaid lover or lover of elegant decor.', 2, 'brand2', 3, 10, 10, 'Orange'),
(14, '100.20', 'Knot Candle', 160, 2, 'Introducing Knot Candle - the perfect blend of aesthetic and functionality. Crafted from premium materials, this candle features a unique knotted design that adds a touch of elegance to any room. Its long-lasting burn time and soothing scent make it a must-have for relaxation and ambiance. Expertly crafted for your pleasure.', 2, 'brand3', 3, 0, 10, 'White'),
(15, '100.20', 'Huge Medusa Candle', 130, 2, 'Illuminate your space with the impressive Huge Medusa Candle. Standing tall and striking, this candle features a unique design inspired by the legendary Medusa. Made with high-quality materials, this candle is perfect for adding a touch of elegance to any room while providing long-lasting and even burn. Bring a mythological touch to your home with the Huge Medusa Candle.', 2, 'brand4', 3, 0, 10, 'Black'),
(16, '100.20', 'Vanilla Soy Candle', 300, 2, 'Crafted from 100% natural soy wax, our Vanilla Soy Candle offers a clean and long-lasting burn that fills the room with a deliciously sweet vanilla scent. With no added chemicals or toxins, this candle is not only eco-friendly but also promotes relaxation and serenity.', 2, 'brand5', 4, 50, 20, 'Orange'),
(17, '100.20', 'Rose Candle Peony', 120, 2, 'Enhance the ambiance of any room with our Rose Candle Peony. Crafted with the finest ingredients, this candle fills your space with a delicate rose and peony scent. Enjoy the benefits of a soothing and calming atmosphere, perfect for relaxation or entertaining. Experience the luxury of our Rose Candle Peony today.', 2, 'brand1', 4, 15, 0, 'Black'),
(18, '100.20', 'Just Bee Candles', 170, 2, 'Experience the natural light and sweet aroma of our Just Bee Candles. Made with pure beeswax, our candles provide a clean and long-lasting burn. With no added chemicals, you can enjoy the benefits of a healthier and more environmentally-friendly option for your home.', 2, 'brand2', 4, 10, 10, 'Brown'),
(19, '100.20', 'Essential Oils Aromatherapy Candles', 300, 2, 'Enhance your well-being with our Essential Oils Aromatherapy Candles. Made with natural oils, these candles release soothing scents that promote relaxation and reduce stress. Indulge in the therapeutic power of aromatherapy.', 2, 'brand3', 4, 0, 10, 'Blue'),
(20, '100.20', 'Candles Wedding Bridal Shower', 300, 2, 'As an expert in the wedding and event industry, I am confident in recommending these Candles Wedding Bridal Shower for all of your special occasions. Made with high-quality materials, these candles provide a warm and welcoming ambiance, adding a special touch to your celebration. Perfect for weddings, bridal showers, and other events, these candles are a must-have for any special occasion.', 2, 'brand4', 4, 0, 10, 'White');




 INSERT INTO images (product, url) VALUES
-- Product 1
(1, '//cadence-workdo.myshopify.com/cdn/shop/files/2.png?v=1717577753'),
(1, '//cadence-workdo.myshopify.com/cdn/shop/files/3.png?v=1717577753'),
(1, '//cadence-workdo.myshopify.com/cdn/shop/files/4.png?v=1717577753'),

-- Product 2
(2, '//cadence-workdo.myshopify.com/cdn/shop/files/1_643fbdd1-db0f-4ada-b291-1e1ba281dd74.png?v=1717580239'),
(2, '//cadence-workdo.myshopify.com/cdn/shop/files/2_741a369d-98f9-447e-94f2-61d6c149d129.png?v=1717580240'),
(2, '//cadence-workdo.myshopify.com/cdn/shop/files/3_6c612249-1272-4604-938b-ffa31ef75007.png?v=1717580240'),
(2, '//cadence-workdo.myshopify.com/cdn/shop/files/4_beb6392d-49d5-444a-9660-b243909c6280.png?v=1717580239'),
(2, '//cadence-workdo.myshopify.com/cdn/shop/files/5_707310c5-d313-4e7b-b552-962c36ce25bc.png?v=1717580240'),

-- Product 3
(3, '//cadence-workdo.myshopify.com/cdn/shop/files/1_52470543-e201-4efe-98a2-206dca71a57f.png?v=1717580078'),
(3, '//cadence-workdo.myshopify.com/cdn/shop/files/2_9b5ad146-b24b-4f4d-bb0b-bd2fe6065c96.png?v=1717580078'),

-- Product 4
(4, '//cadence-workdo.myshopify.com/cdn/shop/files/1_e0e1ef22-3c38-44c2-b9dc-a73989eacc88.png?v=1717579950'),
(4, '//cadence-workdo.myshopify.com/cdn/shop/files/2_34214b19-29f4-4dfa-b978-9374156d4984.png?v=1717579950'),
(4, '//cadence-workdo.myshopify.com/cdn/shop/files/3_9ec1b304-181e-46c8-b4b9-b1222bd3b665.png?v=1717579950'),
(4, '//cadence-workdo.myshopify.com/cdn/shop/files/4_48d3a976-89aa-48c0-9756-2d43148c2eed.png?v=1717579950'),
(4, '//cadence-workdo.myshopify.com/cdn/shop/files/5.png?v=1717579950'),

-- Product 5
(5, '//cadence-workdo.myshopify.com/cdn/shop/files/1_e087b5f6-d21f-4661-8f6c-17c7bb4b2a7a.png?v=1717579731'),
(5, '//cadence-workdo.myshopify.com/cdn/shop/files/2_d5b22176-9e33-4a16-82c9-77b9e52aac66.png?v=1717579731'),
(5, '//cadence-workdo.myshopify.com/cdn/shop/files/3_3edc778a-ae2c-44e8-8acc-8078af9ca2f9.png?v=1717579731'),

-- Product 6
(6, '//cadence-workdo.myshopify.com/cdn/shop/files/1_4f70d0f5-2275-486b-a7b8-c84f695f66a8.png?v=1717581218'),
(6, '//cadence-workdo.myshopify.com/cdn/shop/files/2_71d54736-32d7-4aa0-b865-2266723ef966.png?v=1717581218'),
(6, '//cadence-workdo.myshopify.com/cdn/shop/files/3_f06584a4-7c9f-4269-afbb-ece71f1f3668.png?v=1717581218'),
(6, '//cadence-workdo.myshopify.com/cdn/shop/files/4_b933085c-4907-4703-af59-91173d9931f2.png?v=1717581218'),

-- Product 7
(7, '//cadence-workdo.myshopify.com/cdn/shop/files/1_1f1d0bf0-98da-4305-bc29-b6ebbe3b8750.png?v=1717581101'),
(7, '//cadence-workdo.myshopify.com/cdn/shop/files/2_5a81d772-ecb9-4570-9653-5605b3251bfb.png?v=1717581101'),
(7, '//cadence-workdo.myshopify.com/cdn/shop/files/3_13641004-728d-4c41-893c-621b4b709e39.png?v=1717581101'),
(7, '//cadence-workdo.myshopify.com/cdn/shop/files/4_4d6ad37c-e54a-4c84-9d0a-2ac13467c6fc.png?v=1717581101'),
(7, '//cadence-workdo.myshopify.com/cdn/shop/files/5_179b70d2-82ba-4b36-ad84-152d4a55a791.png?v=1717581101'),

-- Product 8
(8, '//cadence-workdo.myshopify.com/cdn/shop/files/1_c4e66ae5-15db-4148-acf3-4a2e0b690a61.png?v=1717580923'),
(8, '//cadence-workdo.myshopify.com/cdn/shop/files/2_4ad1cdb4-7d41-433c-8dcd-cfd25a7fa508.png?v=1717580923'),
(8, '//cadence-workdo.myshopify.com/cdn/shop/files/3_737d8519-6630-4edf-b29b-28075312dcf3.png?v=1717580923'),
(8, '//cadence-workdo.myshopify.com/cdn/shop/files/4_a8b3fcf6-1d33-4517-8ba4-6be88102a56d.png?v=1717580923'),

-- Product 9
(9, '//cadence-workdo.myshopify.com/cdn/shop/files/1_7a0e47db-16bd-4a41-acf1-43932e60f8cd.png?v=1717580627'),
(9, '//cadence-workdo.myshopify.com/cdn/shop/files/2_c6d168cc-d6cd-40b3-866a-22a6ecba3a4c.png?v=1717580627'),
(9, '//cadence-workdo.myshopify.com/cdn/shop/files/3_c2ba9661-915f-4922-bdb6-0653fd25b298.png?v=1717580627'),
(9, '//cadence-workdo.myshopify.com/cdn/shop/files/4_62076dbf-2fca-4c59-83d1-5b7e20501505.png?v=1717580627'),

-- Product 10
(10, '//cadence-workdo.myshopify.com/cdn/shop/files/1_80bef2ba-ae3e-4957-bf74-a8e00c50a5bb.png?v=1717580394'),
(10, '//cadence-workdo.myshopify.com/cdn/shop/files/2_bfd5acce-3606-4207-bdfc-2f8f8b971e9d.png?v=1717580394'),
(10, '//cadence-workdo.myshopify.com/cdn/shop/files/3_7336fb84-d6e5-4ea3-ad50-982b8900f067.png?v=1717580393'),
(10, '//cadence-workdo.myshopify.com/cdn/shop/files/4_4994d38b-8409-491f-92f8-3eba2f60169d.png?v=1717580393'),


-- Product 11
(11, '//cadence-workdo.myshopify.com/cdn/shop/files/1_f4218d57-9fee-4269-8d56-0528f104780e.png?v=1717582382'),
(11, '//cadence-workdo.myshopify.com/cdn/shop/files/2_f235e98f-06fd-4191-887b-47a69dc3c426.png?v=1717582382'),
(11, '//cadence-workdo.myshopify.com/cdn/shop/files/3_424c34a5-9771-4169-b29a-4de826b5f78f.png?v=1717582382'),
(11, '//cadence-workdo.myshopify.com/cdn/shop/files/4_9f688810-55f5-494a-8c78-a5f44e5785bd.png?v=1717582382'),
(11, '//cadence-workdo.myshopify.com/cdn/shop/files/5_955d5a79-e730-4201-9497-d6d3dfffe55c.png?v=1717582382'),

-- Product 12
(12, '//cadence-workdo.myshopify.com/cdn/shop/files/1_2848604d-1ff2-4622-97f5-70a312813974.png?v=1717582110'),
(12, '//cadence-workdo.myshopify.com/cdn/shop/files/2_3c693d1f-c991-45bd-8763-c1d056b356e0.png?v=1717582110'),
(12, '//cadence-workdo.myshopify.com/cdn/shop/files/3_401f51df-9655-4163-9444-b002f6871a75.png?v=1717582110'),

-- Product 13
(13, '//cadence-workdo.myshopify.com/cdn/shop/files/1_b607fecc-00c8-4840-a3f7-305cd7ca6e08.png?v=1717581943'),
(13, '//cadence-workdo.myshopify.com/cdn/shop/files/2_db0a925c-d31e-4021-af91-659d7a0586d4.png?v=1717581943'),
(13, '//cadence-workdo.myshopify.com/cdn/shop/files/3_14c9ee67-0575-4458-aca1-6dab9605e1e9.png?v=1717581943'),
(13, '//cadence-workdo.myshopify.com/cdn/shop/files/4_39d64a3a-9ba8-48ea-b85d-d0743f79c8ba.png?v=1717581942'),

-- Product 14
(14, '//cadence-workdo.myshopify.com/cdn/shop/files/1_4ecb5a6e-cd49-4558-8baa-c448bcfacbff.png?v=1717581807'),
(14, '//cadence-workdo.myshopify.com/cdn/shop/files/2_54bd281b-d60a-4e3b-b308-d066a6edc79b.png?v=1717581807'),
(14, '//cadence-workdo.myshopify.com/cdn/shop/files/3_f00df262-6df1-48df-8edc-097b13adf38c.png?v=1717581807'),
(14, '//cadence-workdo.myshopify.com/cdn/shop/files/4_8952b0cb-0705-48ee-ad07-7d9830a52530.png?v=1717581807'),

-- Product 15
(15, '//cadence-workdo.myshopify.com/cdn/shop/files/1_0cb99c20-0805-4fa4-a399-cccdbbc01a63.png?v=1717581398'),
(15, '//cadence-workdo.myshopify.com/cdn/shop/files/2_54a669f1-8b79-42af-badb-2a067bf17c37.png?v=1717581398'),
(15, '//cadence-workdo.myshopify.com/cdn/shop/files/3_3da219e8-3ddd-457e-ab16-e4d705b0d686.png?v=1717581399'),
(15, '//cadence-workdo.myshopify.com/cdn/shop/files/4_0cf75a17-6193-4f81-8b26-aed8dc782691.png?v=1717581398'),
(15, '//cadence-workdo.myshopify.com/cdn/shop/files/5_62c439d9-fc8e-4a00-9a7e-53dc9ef67f0b.png?v=1717581399'),

-- Product 16
(16, '//cadence-workdo.myshopify.com/cdn/shop/files/1_36017698-fa16-412f-b71b-c0629dec8f1c.png?v=1717583300'),
(16, '//cadence-workdo.myshopify.com/cdn/shop/files/2_e26708f5-f603-4d12-addc-06752fd7a7a5.png?v=1717583300'),
(16, '//cadence-workdo.myshopify.com/cdn/shop/files/3_13a731bf-7aea-41fb-b33f-c119346ff0a8.png?v=1717583300'),
(16, '//cadence-workdo.myshopify.com/cdn/shop/files/4_f1c40d46-90eb-47b4-ae4d-8f79cba0afa7.png?v=1717583300'),
(16, '//cadence-workdo.myshopify.com/cdn/shop/files/5_7e6ed758-9004-4853-9467-1e026ce2a384.png?v=1717583300'),

-- Product 17
(17, '//cadence-workdo.myshopify.com/cdn/shop/files/1_92ff487b-7102-4a5e-baf5-c79241100b89.png?v=1717583166'),
(17, '//cadence-workdo.myshopify.com/cdn/shop/files/2_f620cd59-931c-45ac-a28a-0cc70eaa532b.png?v=1717583166'),
(17, '//cadence-workdo.myshopify.com/cdn/shop/files/3_958f8968-477c-41f9-9fe0-ac22443e7b02.png?v=1717583166'),
(17, '//cadence-workdo.myshopify.com/cdn/shop/files/4_3ea0b718-5936-4304-87e1-321de4bc36bf.png?v=1717583166'),
(17, '//cadence-workdo.myshopify.com/cdn/shop/files/5_564a896d-18b5-46a7-a215-2037cc990951.png?v=1717583166'),

-- Product 18
(18, '//cadence-workdo.myshopify.com/cdn/shop/files/1_a0019fdd-938c-4ae5-8fdd-d4deebde59a9.png?v=1717583019'),
(18, '//cadence-workdo.myshopify.com/cdn/shop/files/2_1eebbe8d-c900-4d12-a64f-34f6af80d009.png?v=1717583019'),
(18, '//cadence-workdo.myshopify.com/cdn/shop/files/3_74ea70d3-35e3-447e-905c-46e3f174f515.png?v=1717583019'),

-- Product 19
(19, '//cadence-workdo.myshopify.com/cdn/shop/files/1_a43a8331-2e5b-4f1e-80c1-7506d98f7789.png?v=1717582899'),
(19, '//cadence-workdo.myshopify.com/cdn/shop/files/2_9f013d70-fad1-4222-bd64-a6c873af9ff0.png?v=1717582898'),
(19, '//cadence-workdo.myshopify.com/cdn/shop/files/3_f28a36ce-2fc2-48c5-9f2b-67113a4bc6cc.png?v=1717582899'),

-- Product 20
(20, '//cadence-workdo.myshopify.com/cdn/shop/files/1_d4c6114d-8140-4560-acd5-22f9f462c03f.png?v=1717582759'),
(20, '//cadence-workdo.myshopify.com/cdn/shop/files/2_9a8b6d67-dd39-4d7a-b400-8e0fa606a9e0.png?v=1717582759'),
(20, '//cadence-workdo.myshopify.com/cdn/shop/files/3_5d144233-d05c-44c8-9506-f022c5ca63ff.png?v=1717582759'),
(20, '//cadence-workdo.myshopify.com/cdn/shop/files/4_370311d2-9309-4ef8-b2a0-ada1f8c2a1a6.png?v=1717582759');
