
use master;
DROP DATABASE jewelry_store;
GO
CREATE DATABASE jewelry_store;
GO
USE jewelry_store;
GO

CREATE TABLE Categories
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
);
GO
CREATE TABLE Brands
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
);
GO

CREATE TABLE Promotions
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    discount DECIMAL(10, 2) NOT NULL,
    end_date DATE NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
);
GO

CREATE TABLE Products
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    image_url NVARCHAR(255),
    category_id INT,
    brand_id INT,
    promotion_id INT,
    quantity INT,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    FOREIGN KEY (brand_id) REFERENCES Brands(id),
    FOREIGN KEY (promotion_id) REFERENCES Promotions(id)
);
GO

CREATE TABLE Accounts
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    role int,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
);
GO
CREATE TABLE Materials
(
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
);
GO
CREATE TABLE Orders
(
    id INT PRIMARY KEY IDENTITY(1,1),
    account_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_carts_accounts FOREIGN KEY (account_id) REFERENCES Accounts(id)
);
GO
CREATE TABLE Order_Details
(
    id INT PRIMARY KEY IDENTITY(1,1),
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (order_id) REFERENCES Orders(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);
GO

CREATE TABLE promotion_product
(
    promotion_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (promotion_id, product_id),
    FOREIGN KEY (promotion_id) REFERENCES promotions(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
GO
CREATE TABLE Carts
(
    id INT PRIMARY KEY IDENTITY(1,1),
    account_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (account_id) REFERENCES Accounts(id)
);
GO
CREATE TABLE Cart_Details
(
    id INT PRIMARY KEY IDENTITY(1,1),
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (cart_id) REFERENCES Carts(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);
GO
CREATE TABLE News
(
    id INT PRIMARY KEY IDENTITY(1,1),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255),
    author VARCHAR(255),
    published_date DATE NOT NULL,
);
GO

INSERT INTO Categories (name, description) VALUES
('Necklace', 'A piece of jewelry worn around the neck'),
('Earrings', 'A piece of jewelry worn on the earlobe or ear'),
('Bracelet', 'A piece of jewelry worn around the wrist'),
('Ring', 'A small circular band, typically of precious metal and often set with one or more gemstones, worn on a finger as an ornament or a token of engagement or marriage'),
('Brooch', 'A decorative jewelry item designed to be attached to garments, often to fasten them together');
GO

INSERT INTO Brands
    (name, description)
VALUES
    ('Tiffany & Co', 'If you are a fan of fashion accessories, surely you will not be able to ignore the name Tiffany & Co. This is a fashion brand from the US, founded in 1837 by Charles Tiffany and John Young. Initially, Tiffany & Co. named Tiffany, Young & Ellis, then changed to its current name and expanded its operations to London and Paris. The jewelry brand focuses on women, men and children with prices ranging from high-end to affordable.Most of Tiffanys jewelry lines are rich, durable metal collections that can be worn day in and day out, no matter the occasion or occasion. The classic designs have been introduced by Tiffaniy since its inception in 1837 and are produced by skilled artisans. Tiffanys luxury, high-end jewelry takes years to complete. Some of the main products the company is dealing in such as silver, diamonds, crystals, perfumes, office watches, personal accessories...Tiffany & Co. is a famous jewelry brand chosen by many Hollywood stars such as Jackie Kennedy, Elizabeth Taylor...' ),
    ('Cartier', 'Cartier is one of the famous French jewelry brands established in 1860. Initially, Cartier was a jeweler for royals who wanted a unique collection. With a long history of development, each Cartier product is a perfect masterpiece. The companys designs are quality assured with stylish style, leading the trend and trusted by the royal family.Cartier is popular with fine jewelry, has many branches in major cities around the world. In addition to jewelry, Cartier is also loved and widely known for its high-quality, luxurious watches.' ),
    ('Harry Winston', 'Harry Winston is the world famous jewelry brand of designer Harry Winston, launched in 1932. His company continues to keep this name and continues to make jewelry, designed using diamonds. , gemstone.Harry Winstons products are sophisticated, elegant and retain the elegance and nobility. There are many famous international stars using Harrys products because of their sophisticated and classy design.'),
    ('Bvlgari', 'Bvlgari is one of the worlds most luxurious jewelry brands from watches, fashion to jewelry. The famous jewelry brand Bvlgari based in Rome very well combines the two extremes of luxury and luxury and traditional, classic.Today, Bvlgaris collection still flaunts the houses signature features, including large, boldly shaped gems. In particular, Bvlagari uses carbon stone (a tradition dating back to 1960s Italy) and 18 karat gold for its collection.'),
    ('Chopard', 'In addition to making luxury Swiss watches, Chopard is a brand known for its luxury jewelry collections. The company pays great attention to input materials to make the best products. Many of Choparts jewelry lines are crafted with 18-karat gold and the highest quality gemstones.Not only that, this famous jewelry brand pays great attention to detail and precision on even the smallest product. This adds value to Chopards already expensive luxury product line.'),
    ('Chanel', 'Perhaps no one is unaware of this high-end fashion brand. The French luxury fashion house was born in 1909 by the legendary Gabrielle. In addition to costumes, perfumes or cosmetics, Channel also invades the jewelry segment with sophisticated contemporary designs and luxuriously shaped diamond collections.Thanks to its uniqueness and elegance, the high-end jewelry set from the famous fashion house Chanel is the choice of many Asian fashionistas.');
GO

INSERT INTO Promotions
    (name, description, start_date, discount, end_date)
VALUES
    ('Summer Sale', 'Save up to 50% on all products', '2023-06-01', 50, '2023-06-30'),
    ('Back to School', 'Get ready for school with our discounts', '2023-08-01', 25, '2023-08-31'),
    ('Black Friday', 'The biggest sale of the year', '2023-11-24', 70, '2023-11-27'),
    ('Christmas Sale', 'Shop for the perfect gifts and save', '2023-12-01', 40, '2023-12-31'),
    ('New Year Sale', 'Start the new year with new products and discounts', '2024-01-01', 30, '2024-01-15'),
    ('Valentine''s Day Sale', 'Celebrate love with our discounts', '2024-02-01', 20, '2024-02-14'),
    ('Easter Sale', 'Hop into savings with our Easter discounts', '2024-03-15', 15, '2024-04-15'),
    ('Summer Clearance', 'Clear out summer inventory with our discounts', '2024-07-01', 60, '2024-07-31'),
    ('Labor Day Sale', 'Enjoy the long weekend with our discounts', '2024-09-01', 35, '2024-09-04'),
    ('Halloween Sale', 'Spooky savings on all products', '2024-10-01', 45, '2024-10-31');
GO

INSERT INTO Materials
    (name, description)
VALUES
    ('Cotton', 'Soft, fluffy fiber that grows in a boll around the seeds of the cotton plant.'),
    ('Polyester', 'A synthetic fabric made from petroleum.'),
    ('Nylon', 'A synthetic thermoplastic material that is lightweight and strong.'),
    ('Silk', 'A natural protein fiber that is produced by the silkworm.'),
    ('Leather', 'Material made from the skin of an animal by tanning or a similar process.'),
    ('Wool', 'A textile fiber obtained from sheep and other animals.'),
    ('Linen', 'A textile made from the fibers of the flax plant.'),
    ('Denim', 'A sturdy cotton twill fabric with a blue-black color.'),
    ('Suede', 'Leather with a napped finish, commonly used for jackets, shoes, shirts, purses, furniture, and other items.'),
    ('Fleece', 'A soft, warm, and comfortable fabric that is often used in jackets, blankets, and other clothing.');
GO

INSERT INTO Accounts
    (name, email, password, phone, address)
VALUES
    ('John Doe', 'john.doe@example.com', 'password123', '1234567890', '123 Main St, Anytown USA'),
    ('Jane Smith', 'jane.smith@example.com', 'password456', '0987654321', '456 Park Ave, Anytown USA'),
    ('Bob Johnson', 'bob.johnson@example.com', 'password789', '555-555-5555', '789 Broadway, Anytown USA'),
    ('Alice Brown', 'alice.brown@example.com', 'password321', '444-444-4444', '321 Elm St, Anytown USA'),
    ('Mike Davis', 'mike.davis@example.com', 'password654', '777-777-7777', '555 High St, Anytown USA'),
    ('Sarah Lee', 'sarah.lee@example.com', 'password987', '222-222-2222', '888 Low St, Anytown USA'),
    ('Tom Wilson', 'tom.wilson@example.com', 'passwordabc', '333-333-3333', '999 Oak St, Anytown USA'),
    ('Emily Nguyen', 'emily.nguyen@example.com', 'passworddef', '111-111-1111', '777 Pine St, Anytown USA'),
    ('David Kim', 'david.kim@example.com', 'passwordxyz', '666-666-6666', '666 Maple St, Anytown USA'),
    ('Samantha Lee', 'samantha.lee@example.com', 'password1234', '444-444-4444', '111 Cherry St, Anytown USA');
GO
-- DELETE FROM Products;
-- DELETE FROM Orders;
-- DELETE FROM Order_Details;
-- DELETE FROM Promotions;
-- DELETE FROM promotion_product;
-- DELETE FROM Categories;
-- DELETE FROM brands;


INSERT INTO Products (name, description, price, image_url, category_id, brand_id) VALUES
('Ring NLF 450', 'SKU: NLF 450 - 14K - Cubic Zirconia Material: AU585 Gold Weight: 1.34g Stone Type: Cubic Zirconia Stone size: 1.5mm*17', 106.96,'../../../assets/img/ing_product/nhan/1/1.png',5,2),
('Ring NDINO 271LDIA', 'Product code: NDINO 271LDIA - 14K - Diamond Lab Grown Material: AU585 Gold weight : 2.71g Stone Type : Diamond Lab Grown Stone Size: 5.0mm*1 Stone Type : Diamond Lab Grown Stone size: 1.0mm*36, 1.1mm*8', 937.44,'../../../assets/img/ing_product/nhan/2/1.png',5,2),
('Ring NLF 463', 'Product code: NLF 463 - 14K Material: AU585 Gold weight: 2.24g Stone Type: Cubic Zirconia', 159.72,'../../../assets/img/ing_product/nhan/3/1.png' ,5,2),
('Ring NDINO 280KC', 'Product code: NDINO Timeless 280KC - 18K - Diamond Material: AU750 Gold weight: 2.36g Stone Type: Diamond Stone size: 1 carat', 384.70,'../../../assets/img/ing_product/nhan/4/1.png' ,5,2),
('Ring NBKC 030', 'SKU: NBKC 030 - 14K - Emerald and White CZ Material: AU585 Gold weight: 2.72g Stone Type: Emerald and White CZ Stone', 243.64,'../../../assets/img/ing_product/nhan/5/1.png',5,3),
('Ring NDINO 230', 'SKU: NDINO 230 - 14K - Cubic Zirconia Material: AU585 Gold weight : 2.46 ± 0.4g Stone Type: Cubic Zirconia', 160.99,'../../../assets/img/ing_product/nhan/6/1.png' ,5,3),
('Ring NDINO 222', 'SKU: NDINO 222 - 14K - Cubic Zirconia Material: AU585 Gold weight : 2.90 ± 0.4g Stone Type: Cubic Zirconia Stone size : 6.0mm Quantity: 1', 190.58,'../../../assets/img/ing_product/nhan/7/1.png',5,3),
('Ring NBKC 029', 'Product code: NBKC 029 - 14K - Sapphire and White CZ stones Material: AU585 Gold weight: 2.27g Stone Type: Sapphire Color and White CZ Stone', 208.65,'../../../assets/img/ing_product/nhan/8/1.png' ,5,3),
('Ring NDINO 258KC', 'Product code : NDINO Timeless 258KC - 14K - Diamond Material: AU750 Gold weight: 3.17g Stone Type: Diamond Stone Size : 5.03mm Quantity: 1', 2976.93,'../../../assets/img/ing_product/nhan/9/1.png' ,5,4),
('necklace DCBTCC 88', 'Product code: DCBTCC 88 Material: AU585 Gold Weight: 2.30g Stone Type: Pearl', 200,'../../../assets/img/ing_product/daychuyen/1/1.png',2,4),
('necklace DCBTCC ', 'Product code:DCBTCC 83 Material: AU585 Gold Weight: 2.37g Stone Type: Pearl', 180,'../../../assets/img/ing_product/daychuyen/2/1.png',2,4),
('Pendant MDPTB 351', 'Product code: MDPTB 351 Material: AU585 Gold Weight: 1.54g Stone Type: Cubic Zirconia Stone size: 8mm', 100,'../../../assets/img/ing_product/daychuyen/3/1.png',2,4),
('Necklace DCPTB 350', 'Product code : DCPTB 350 Material: AU585 Gold weight : 2.40g Stone Type: Cubic Zirconia', 120,'../../../assets/img/ing_product/daychuyen/4/1.png',2,4),
('Pendant MDPTB 348', 'Product code: MDPTB 348 Material: AU585 Gold Weight: 0.63g Stone Type: Cubic Zirconia Exclusive design from Korea', 60,'../../../assets/img/ing_product/daychuyen/5/1.png',2,4),
('Necklace DCPTB 343', 'Product code: DCPTB 343 Material: AU585 Gold weight: 2.27g Stone Type: Cubic Zirconia', 190,'../../../assets/img/ing_product/daychuyen/6/1.png',2,2),
('Pendant MDMAMD 676', 'SKU: MDMAMD 676 Material: AU585 Gold Weight: 0.9g Stone Type: Blue Sapphire Natural Stone Stone size: 2.0mm*3 Stone Type: Moisanite Stone size : 1.5mm*3, 1.25mm*1', 110,'../../../assets/img/ing_product/daychuyen/7/1.png',2,2),
('Pendant MDMAMD 660', 'Product code: MDMAMD 660 Material: AU585 Gold Weight: 0.87g Stone Type: Cubic Zirconia', 80,'../../../assets/img/ing_product/daychuyen/8/1.png',2,4),
('Necklace DCPTB 320', 'SKU: DCPTB 320 - 14K - Cubic Zirconia Iris necklace has a feminine design with meticulously honed flower motifs, exuding a beautiful and splendid beauty. Sparkling CZ stones bring femininity and radiance to women. The design is suitable for a youthful style, creating a highlight for girls when combined with gentle and elegant outfits.', 200,'../../../assets/img/ing_product/daychuyen/9/1.png',2,5),
('Necklace DCMAMD 619', 'Product code: DCMAMD 619 - 14k Material: AU585 Gold Weight: 4.16g Stone Type: White CZ Stone Exclusive design from Korea', 230,'../../../assets/img/ing_product/daychuyen/10/1.png',2,5),
('Earring BT 420', 'Product code: BT 420 Material: AU 585 - 14K Gold weight : 1.77g Stone Type: Cubic Zirconia', 123.54,'../../../assets/img/ing_product/bongtai/1/1.png',3,5),
('Earring BTPTB 305', 'Product code: BTPTB 305 Material: AU585 Gold Weight: 1.56g Stone Type: Cubic Zirconia and Colored Amethyts', 196.32,'../../../assets/img/ing_product/bongtai/1/1.png',3,5),
('Earring BTPTB 278', 'SKU: BTPTB 278 - 14K - Cubic Zirconia PTB 278 jewelry set stands out attractively by the aqua stone placed at the center of the pendant, combined with the unique snowflake motif. You can combine this jewelry set with office wear, streetwear will be suitable.', 170.95,'../../../assets/img/ing_product/bongtai/2/1.png',3,5), 
('Earring BTPTB 291', 'Product code: BTPTB 291 Material: AU585 Gold Weight : 1.62g Stone Type: Cubic Zirconia and Ruby Color', 149.90,'../../../assets/img/ing_product/bongtai/3/1.png',3,2), 
('Earring BTBTCC 84', 'Product code: BTCTCC 84 - 14K - Pearl Material: AU585 Gold weight: 2.21g Stone Type: Pearl Stone size: 7mm Quantity: 1', 66.28,'../../../assets/img/ing_product/bongtai/4/1.png',3,3), 
('Earring BTPTB 342', 'Product code: BTPTB 342 - 14K Material: AU585 Gold Weight: ≈ 1.55g Stone Type: Cubic Zirconia', 101.82,'../../../assets/img/ing_product/bongtai/5/1.png',3,2),
('Earing BTBKC 032', 'SKU: BTBKC 032 - 14K - Tazanite and White CZ Material: AU585 Gold Weight: ≈ 1.70g Stone Type: Tazanite Color Stone and White CZ Stone', 168.65,'../../../assets/img/ing_product/bongtai/6/1.png',3,3),
('Earring  BT 348', 'SKU: BT 348 - 14K - Cubic Zirconia Earrings BT 348 have a simple and gentle design with a single CZ stone that is firmly held by the stone spokes. Light and elegant design with high applicability.', 139.88,'../../../assets/img/ing_product/bongtai/7/1.png' ,3,4), 
('Earring BTPTB 292', 'SKU: BTPTB 292 - 14K - Cubic Zirconia and Colored Sapphire Material: AU585 Gold Weight: 2.70g Stone Type: Cubic Zirconia and Colored Sapphire', 246.53,'../../../assets/img/ing_product/bongtai/8/1.png' ,3,5), 
('Earring BTAM 87', 'SKU: BTAM87 - 14K - Gold Material: AU585 Gold Weight: 0.48g Stone Type: White CZ Stone', 62.92, '../../../assets/img/ing_product/bongtai/9/1.png',3,5);
GO
INSERT INTO promotion_product
    (promotion_id, product_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3);


INSERT INTO Orders
    (account_id, order_date, total_price)
VALUES
    (1, '2023-05-08', 249.99),
    (1, '2023-05-06', 169.99),
    (2, '2023-05-07', 99.99),
    (2, '2023-05-05', 299.99),
    (3, '2023-05-03', 59.99),
    (4, '2023-05-04', 79.99),
    (5, '2023-05-06', 219.99),
    (1, '2023-05-08', 149.99);
GO

INSERT INTO Order_Details
    (order_id, product_id, quantity, price)
VALUES
    (1, 1, 2, 99.99),
    (1, 2, 1, 50.00),
    (2, 3, 1, 69.99),
    (2, 4, 2, 115.00),
    (3, 5, 1, 99.99),
    (3, 6, 1, 0.00),
    (4, 7, 3, 199.99);
GO

INSERT INTO News
    (title, content, image, author, published_date)
VALUES
    ('New Study Reveals Surprising Benefits of Eating Chocolate', 'A new study has found that eating chocolate every day can improve brain function and reduce the risk of heart disease.', 'https://example.com/chocolate.jpg', 'John Smith', '2023-05-09'),
    ('Local Restaurant Wins Award for Best Pizza in Town', 'A small pizza joint in the heart of downtown has beaten out the competition to win the title of best pizza in town.', 'https://example.com/pizza.jpg', 'Mary Johnson', '2023-05-08'),
    ('Scientists Discover New Species of Bird in Amazon Rainforest', 'A team of scientists has discovered a new species of bird in the Amazon rainforest that has never been seen before.', NULL, 'David Brown', '2023-05-07'),
    ('Breaking: Major Tech Company Announces Merger', 'Two major tech companies are set to merge in a deal worth over $10 billion, according to sources familiar with the matter.', 'https://example.com/tech.jpg', 'Sarah Lee', '2023-05-06'),
    ('New Book by Bestselling Author Takes the World by Storm', 'The latest book from bestselling author Jane Doe has become an instant sensation, topping bestseller lists around the world.', NULL, 'Jane Doe', '2023-05-05'),
    ('New Study Reveals Surprising Benefits of Eating Chocolate', 'A new study has found that eating chocolate every day can improve brain function and reduce the risk of heart disease.', 'https://example.com/chocolate.jpg', 'John Smith', '2023-05-09'),
    ('Local Restaurant Wins Award for Best Pizza in Town', 'A small pizza joint in the heart of downtown has beaten out the competition to win the title of best pizza in town.', 'https://example.com/pizza.jpg', 'Mary Johnson', '2023-05-08'),
    ('Scientists Discover New Species of Bird in Amazon Rainforest', 'A team of scientists has discovered a new species of bird in the Amazon rainforest that has never been seen before.', NULL, 'David Brown', '2023-05-07'),
    ('Breaking: Major Tech Company Announces Merger', 'Two major tech companies are set to merge in a deal worth over $10 billion, according to sources familiar with the matter.', 'https://example.com/tech.jpg', 'Sarah Lee', '2023-05-06'),
    ('New Book by Bestselling Author Takes the World by Storm', 'The latest book from bestselling author Jane Doe has become an instant sensation, topping bestseller lists around the world.', NULL, 'Jane Doe', '2023-05-05'),
    ('New Study Reveals Surprising Benefits of Eating Chocolate', 'A new study has found that eating chocolate every day can improve brain function and reduce the risk of heart disease.', 'https://example.com/chocolate.jpg', 'John Smith', '2023-05-09'),
    ('Local Restaurant Wins Award for Best Pizza in Town', 'A small pizza joint in the heart of downtown has beaten out the competition to win the title of best pizza in town.', 'https://example.com/pizza.jpg', 'Mary Johnson', '2023-05-08'),
    ('Scientists Discover New Species of Bird in Amazon Rainforest', 'A team of scientists has discovered a new species of bird in the Amazon rainforest that has never been seen before.', NULL, 'David Brown', '2023-05-07'),
    ('Breaking: Major Tech Company Announces Merger', 'Two major tech companies are set to merge in a deal worth over $10 billion, according to sources familiar with the matter.', 'https://example.com/tech.jpg', 'Sarah Lee', '2023-05-06'),
    ('New Book by Bestselling Author Takes the World by Storm', 'The latest book from bestselling author Jane Doe has become an instant sensation, topping bestseller lists around the world.', NULL, 'Jane Doe', '2023-05-05'),
    ('New Study Reveals Surprising Benefits of Eating Chocolate', 'A new study has found that eating chocolate every day can improve brain function and reduce the risk of heart disease.', 'https://example.com/chocolate.jpg', 'John Smith', '2023-05-09'),
    ('Local Restaurant Wins Award for Best Pizza in Town', 'A small pizza joint in the heart of downtown has beaten out the competition to win the title of best pizza in town.', 'https://example.com/pizza.jpg', 'Mary Johnson', '2023-05-08'),
    ('Scientists Discover New Species of Bird in Amazon Rainforest', 'A team of scientists has discovered a new species of bird in the Amazon rainforest that has never been seen before.', NULL, 'David Brown', '2023-05-07'),
    ('Breaking: Major Tech Company Announces Merger', 'Two major tech companies are set to merge in a deal worth over $10 billion, according to sources familiar with the matter.', 'https://example.com/tech.jpg', 'Sarah Lee', '2023-05-06'),
    ('New Book by Bestselling Author Takes the World by Storm', 'The latest book from bestselling author Jane Doe has become an instant sensation, topping bestseller lists around the world.', NULL, 'Jane Doe', '2023-05-05');

