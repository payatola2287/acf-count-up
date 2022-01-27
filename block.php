<?php
$prefix = get_field( 'prefix' );
$suffix = get_field( 'suffix' ); 
$number = get_field( 'number' );
$style = '';
$css_class = 'block-count-up';
$id = $css_class . '-' . $block['id'];
if( !empty( $block['anchor'] ) ){
    $id = $block['anchor'];
}
if( !empty( $block['className'] ) ){
    $css_class .= ' ' . $block['className'];
}
if( !empty( $block['align_text'] ) ){
    $css_class .= ' text-' . $block['align_text']; 
}
?>
<div class="<?php echo $css_class; ?>" id="<?php echo $id; ?>">
    <?php echo $prefix ? $prefix : ''; ?><span class="count-up-digit" data-number="<?php echo $number; ?>">
        <?php echo $is_preview ? $number : '0'; ?>
    </span><?php echo $suffix ? esc_attr($suffix) : ''; ?>
    
</div>