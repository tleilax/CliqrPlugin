  <div class="controls">

  <!-- STOP -->
    <? if ($question->isActive()) : ?>
      <form action="<?= $controller->url_for('questions/stop', $id) ?>" method="POST">
        <?= CSRFProtection::tokenTag() ?>
        <?= \STUDIP\Button::create(_("Stoppen"), '') ?>
      </form>
    <? endif ?>

  <!-- EDIT -->
    <?= \STUDIP\LinkButton::create(_("�ndern"),  $controller->url_for('questions/edit', $id)) ?>

  <!-- DELETE -->
    <form class="questions-destroy"
          action="<?= $controller->url_for('questions/destroy', $id) ?>"
          method="POST"
          data-confirm="<?= ("Wollen Sie die Frage wirklich l�schen?") ?>">
      <?= \STUDIP\Button::create(_("L�schen")) ?>
    </form>

  </div>
