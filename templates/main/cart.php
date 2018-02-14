<main id="cart-main" class="template-main single-column">
	<h1>Your Cart</h1>
	<form id="cart-update-form" action="/cart" method="POST" novalidate>
		<article>
			<p>
				<span class="image"><img src="/img/shopify/IMG_7107_medium.jpg?v=1510769812" alt=""></span>
				<span class="title"><a href="product.php">Blue Boats Dinner Placemats</a></span>
				<span class="quantity label"><label for="updates_205984235523">Quantity </label><input class="cart__quantity-selector" name="updates[]" id="updates_205984235523" value="1" min="0" type="number"></span>
				<span class="price label"><strong>Price</strong> $50.00</span>
				<span class="remove"><a href="/cart/change?line=1&quantity=0">Remove</a></span>
			</p>
		</article>
		<article>
			<p>
				<span class="image"><img src="/img/shopify/IMG_7107_medium.jpg?v=1510769812" alt=""></span>
				<span class="title"><a href="product.php">Blue Boats Dinner Placemats</a></span>
				<span class="quantity label"><label for="updates_205984235524">Quantity </label><input class="cart__quantity-selector" name="updates[]" id="updates_205984235524" value="1" min="0" type="number"></span>
				<span class="price label"><strong>Price</strong> $50.00</span>
				<span class="remove"><a href="/cart/change?line=2&quantity=0">Remove</a></span>
			</p>
		</article>
		<p id="cart-totals">
			<span class="price label"><strong>Total cost</strong> $100.00</span>
		</p>
		<section id="cart-bottom">
			<div class="notes">
				<label for="CartSpecialInstructions">Add special instructions for your order ...</label>
				<textarea name="note" id="CartSpecialInstructions"></textarea>
			</div>
			<div class="buttons">
				<input name="update" class="btn" value="Update Cart" type="submit">
				<input name="checkout" class="btn" value="Check Out" type="submit">
			</div>
		</section>
	</form>
</main>
